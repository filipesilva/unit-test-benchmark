import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3414Component } from './my-comp-3414.component';

describe('MyComp3414Component', () => {
  let component: MyComp3414Component;
  let fixture: ComponentFixture<MyComp3414Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3414Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3414Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
