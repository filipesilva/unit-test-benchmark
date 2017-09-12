import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8864Component } from './my-comp-8864.component';

describe('MyComp8864Component', () => {
  let component: MyComp8864Component;
  let fixture: ComponentFixture<MyComp8864Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8864Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8864Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
