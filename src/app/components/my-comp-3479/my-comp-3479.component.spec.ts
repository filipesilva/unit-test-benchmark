import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3479Component } from './my-comp-3479.component';

describe('MyComp3479Component', () => {
  let component: MyComp3479Component;
  let fixture: ComponentFixture<MyComp3479Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3479Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3479Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
