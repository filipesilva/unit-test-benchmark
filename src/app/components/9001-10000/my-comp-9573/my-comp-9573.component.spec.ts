import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9573Component } from './my-comp-9573.component';

describe('MyComp9573Component', () => {
  let component: MyComp9573Component;
  let fixture: ComponentFixture<MyComp9573Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9573Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9573Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
