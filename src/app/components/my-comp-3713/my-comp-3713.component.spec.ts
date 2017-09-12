import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3713Component } from './my-comp-3713.component';

describe('MyComp3713Component', () => {
  let component: MyComp3713Component;
  let fixture: ComponentFixture<MyComp3713Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3713Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3713Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
