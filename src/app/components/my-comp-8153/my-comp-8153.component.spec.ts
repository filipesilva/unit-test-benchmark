import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8153Component } from './my-comp-8153.component';

describe('MyComp8153Component', () => {
  let component: MyComp8153Component;
  let fixture: ComponentFixture<MyComp8153Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8153Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8153Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
