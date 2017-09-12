import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3857Component } from './my-comp-3857.component';

describe('MyComp3857Component', () => {
  let component: MyComp3857Component;
  let fixture: ComponentFixture<MyComp3857Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3857Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3857Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
