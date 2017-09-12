import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3889Component } from './my-comp-3889.component';

describe('MyComp3889Component', () => {
  let component: MyComp3889Component;
  let fixture: ComponentFixture<MyComp3889Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3889Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3889Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
