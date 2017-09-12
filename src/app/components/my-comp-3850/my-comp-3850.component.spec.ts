import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3850Component } from './my-comp-3850.component';

describe('MyComp3850Component', () => {
  let component: MyComp3850Component;
  let fixture: ComponentFixture<MyComp3850Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3850Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3850Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
