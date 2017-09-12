import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3960Component } from './my-comp-3960.component';

describe('MyComp3960Component', () => {
  let component: MyComp3960Component;
  let fixture: ComponentFixture<MyComp3960Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3960Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3960Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
