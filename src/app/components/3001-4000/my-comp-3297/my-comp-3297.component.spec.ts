import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3297Component } from './my-comp-3297.component';

describe('MyComp3297Component', () => {
  let component: MyComp3297Component;
  let fixture: ComponentFixture<MyComp3297Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3297Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3297Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
