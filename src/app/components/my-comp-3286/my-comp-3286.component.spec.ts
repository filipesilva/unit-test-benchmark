import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3286Component } from './my-comp-3286.component';

describe('MyComp3286Component', () => {
  let component: MyComp3286Component;
  let fixture: ComponentFixture<MyComp3286Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3286Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3286Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
