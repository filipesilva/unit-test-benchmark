import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3940Component } from './my-comp-3940.component';

describe('MyComp3940Component', () => {
  let component: MyComp3940Component;
  let fixture: ComponentFixture<MyComp3940Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3940Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3940Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
