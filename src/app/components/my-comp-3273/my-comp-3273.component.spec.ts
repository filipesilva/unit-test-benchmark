import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3273Component } from './my-comp-3273.component';

describe('MyComp3273Component', () => {
  let component: MyComp3273Component;
  let fixture: ComponentFixture<MyComp3273Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3273Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3273Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
