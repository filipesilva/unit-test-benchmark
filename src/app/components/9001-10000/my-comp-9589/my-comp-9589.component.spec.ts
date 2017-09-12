import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9589Component } from './my-comp-9589.component';

describe('MyComp9589Component', () => {
  let component: MyComp9589Component;
  let fixture: ComponentFixture<MyComp9589Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9589Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9589Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
