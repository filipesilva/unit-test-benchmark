import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3789Component } from './my-comp-3789.component';

describe('MyComp3789Component', () => {
  let component: MyComp3789Component;
  let fixture: ComponentFixture<MyComp3789Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3789Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3789Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
