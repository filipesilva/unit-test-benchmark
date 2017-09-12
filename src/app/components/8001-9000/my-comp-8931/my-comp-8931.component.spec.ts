import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8931Component } from './my-comp-8931.component';

describe('MyComp8931Component', () => {
  let component: MyComp8931Component;
  let fixture: ComponentFixture<MyComp8931Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8931Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8931Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
