import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4153Component } from './my-comp-4153.component';

describe('MyComp4153Component', () => {
  let component: MyComp4153Component;
  let fixture: ComponentFixture<MyComp4153Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4153Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4153Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
