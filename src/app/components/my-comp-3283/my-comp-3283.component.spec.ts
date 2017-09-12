import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3283Component } from './my-comp-3283.component';

describe('MyComp3283Component', () => {
  let component: MyComp3283Component;
  let fixture: ComponentFixture<MyComp3283Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3283Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3283Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
