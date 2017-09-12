import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3621Component } from './my-comp-3621.component';

describe('MyComp3621Component', () => {
  let component: MyComp3621Component;
  let fixture: ComponentFixture<MyComp3621Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3621Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3621Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
