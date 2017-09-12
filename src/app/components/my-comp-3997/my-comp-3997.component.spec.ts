import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3997Component } from './my-comp-3997.component';

describe('MyComp3997Component', () => {
  let component: MyComp3997Component;
  let fixture: ComponentFixture<MyComp3997Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3997Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3997Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
