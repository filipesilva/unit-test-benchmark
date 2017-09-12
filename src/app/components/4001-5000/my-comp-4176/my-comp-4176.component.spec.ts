import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4176Component } from './my-comp-4176.component';

describe('MyComp4176Component', () => {
  let component: MyComp4176Component;
  let fixture: ComponentFixture<MyComp4176Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4176Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4176Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
