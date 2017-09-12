import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3998Component } from './my-comp-3998.component';

describe('MyComp3998Component', () => {
  let component: MyComp3998Component;
  let fixture: ComponentFixture<MyComp3998Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3998Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3998Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
