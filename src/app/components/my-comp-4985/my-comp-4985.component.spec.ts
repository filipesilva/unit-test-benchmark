import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4985Component } from './my-comp-4985.component';

describe('MyComp4985Component', () => {
  let component: MyComp4985Component;
  let fixture: ComponentFixture<MyComp4985Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4985Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4985Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
