import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4601Component } from './my-comp-4601.component';

describe('MyComp4601Component', () => {
  let component: MyComp4601Component;
  let fixture: ComponentFixture<MyComp4601Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4601Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4601Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
