import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp354Component } from './my-comp-354.component';

describe('MyComp354Component', () => {
  let component: MyComp354Component;
  let fixture: ComponentFixture<MyComp354Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp354Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp354Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
