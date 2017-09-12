import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3490Component } from './my-comp-3490.component';

describe('MyComp3490Component', () => {
  let component: MyComp3490Component;
  let fixture: ComponentFixture<MyComp3490Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3490Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3490Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
