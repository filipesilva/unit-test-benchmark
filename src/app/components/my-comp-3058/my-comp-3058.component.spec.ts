import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3058Component } from './my-comp-3058.component';

describe('MyComp3058Component', () => {
  let component: MyComp3058Component;
  let fixture: ComponentFixture<MyComp3058Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3058Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3058Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
