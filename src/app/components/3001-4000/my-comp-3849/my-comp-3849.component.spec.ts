import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3849Component } from './my-comp-3849.component';

describe('MyComp3849Component', () => {
  let component: MyComp3849Component;
  let fixture: ComponentFixture<MyComp3849Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3849Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3849Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
