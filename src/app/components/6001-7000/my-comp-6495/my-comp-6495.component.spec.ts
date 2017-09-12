import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6495Component } from './my-comp-6495.component';

describe('MyComp6495Component', () => {
  let component: MyComp6495Component;
  let fixture: ComponentFixture<MyComp6495Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6495Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6495Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
