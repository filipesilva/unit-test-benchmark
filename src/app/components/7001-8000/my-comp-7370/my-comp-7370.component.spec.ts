import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7370Component } from './my-comp-7370.component';

describe('MyComp7370Component', () => {
  let component: MyComp7370Component;
  let fixture: ComponentFixture<MyComp7370Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7370Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7370Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
