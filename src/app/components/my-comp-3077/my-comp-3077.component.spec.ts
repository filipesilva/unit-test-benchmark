import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3077Component } from './my-comp-3077.component';

describe('MyComp3077Component', () => {
  let component: MyComp3077Component;
  let fixture: ComponentFixture<MyComp3077Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3077Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3077Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
