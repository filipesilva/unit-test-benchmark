import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3720Component } from './my-comp-3720.component';

describe('MyComp3720Component', () => {
  let component: MyComp3720Component;
  let fixture: ComponentFixture<MyComp3720Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3720Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3720Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
