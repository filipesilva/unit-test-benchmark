import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp384Component } from './my-comp-384.component';

describe('MyComp384Component', () => {
  let component: MyComp384Component;
  let fixture: ComponentFixture<MyComp384Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp384Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp384Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
