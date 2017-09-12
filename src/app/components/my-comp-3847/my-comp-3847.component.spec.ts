import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3847Component } from './my-comp-3847.component';

describe('MyComp3847Component', () => {
  let component: MyComp3847Component;
  let fixture: ComponentFixture<MyComp3847Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3847Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3847Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
