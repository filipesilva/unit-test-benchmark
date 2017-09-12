import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3127Component } from './my-comp-3127.component';

describe('MyComp3127Component', () => {
  let component: MyComp3127Component;
  let fixture: ComponentFixture<MyComp3127Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3127Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3127Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
