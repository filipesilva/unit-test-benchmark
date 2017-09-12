import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8689Component } from './my-comp-8689.component';

describe('MyComp8689Component', () => {
  let component: MyComp8689Component;
  let fixture: ComponentFixture<MyComp8689Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8689Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8689Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
