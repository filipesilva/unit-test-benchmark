import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7128Component } from './my-comp-7128.component';

describe('MyComp7128Component', () => {
  let component: MyComp7128Component;
  let fixture: ComponentFixture<MyComp7128Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7128Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7128Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
