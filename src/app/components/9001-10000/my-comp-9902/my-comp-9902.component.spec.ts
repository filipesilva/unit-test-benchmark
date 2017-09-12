import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9902Component } from './my-comp-9902.component';

describe('MyComp9902Component', () => {
  let component: MyComp9902Component;
  let fixture: ComponentFixture<MyComp9902Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9902Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9902Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
