import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9020Component } from './my-comp-9020.component';

describe('MyComp9020Component', () => {
  let component: MyComp9020Component;
  let fixture: ComponentFixture<MyComp9020Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9020Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
