import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3458Component } from './my-comp-3458.component';

describe('MyComp3458Component', () => {
  let component: MyComp3458Component;
  let fixture: ComponentFixture<MyComp3458Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3458Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3458Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
