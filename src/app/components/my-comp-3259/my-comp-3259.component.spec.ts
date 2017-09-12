import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3259Component } from './my-comp-3259.component';

describe('MyComp3259Component', () => {
  let component: MyComp3259Component;
  let fixture: ComponentFixture<MyComp3259Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3259Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3259Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
