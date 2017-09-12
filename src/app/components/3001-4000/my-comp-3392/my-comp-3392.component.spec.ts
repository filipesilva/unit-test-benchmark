import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3392Component } from './my-comp-3392.component';

describe('MyComp3392Component', () => {
  let component: MyComp3392Component;
  let fixture: ComponentFixture<MyComp3392Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3392Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3392Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
