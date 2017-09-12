import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3906Component } from './my-comp-3906.component';

describe('MyComp3906Component', () => {
  let component: MyComp3906Component;
  let fixture: ComponentFixture<MyComp3906Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3906Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3906Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
