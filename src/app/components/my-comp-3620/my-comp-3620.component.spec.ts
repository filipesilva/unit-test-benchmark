import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3620Component } from './my-comp-3620.component';

describe('MyComp3620Component', () => {
  let component: MyComp3620Component;
  let fixture: ComponentFixture<MyComp3620Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3620Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3620Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
