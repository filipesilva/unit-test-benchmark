import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3337Component } from './my-comp-3337.component';

describe('MyComp3337Component', () => {
  let component: MyComp3337Component;
  let fixture: ComponentFixture<MyComp3337Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3337Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3337Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
