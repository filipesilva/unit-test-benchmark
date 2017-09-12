import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3880Component } from './my-comp-3880.component';

describe('MyComp3880Component', () => {
  let component: MyComp3880Component;
  let fixture: ComponentFixture<MyComp3880Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3880Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3880Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
