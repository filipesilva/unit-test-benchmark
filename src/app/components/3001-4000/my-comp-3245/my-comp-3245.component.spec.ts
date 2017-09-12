import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3245Component } from './my-comp-3245.component';

describe('MyComp3245Component', () => {
  let component: MyComp3245Component;
  let fixture: ComponentFixture<MyComp3245Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3245Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3245Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
