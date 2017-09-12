import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9026Component } from './my-comp-9026.component';

describe('MyComp9026Component', () => {
  let component: MyComp9026Component;
  let fixture: ComponentFixture<MyComp9026Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9026Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9026Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
