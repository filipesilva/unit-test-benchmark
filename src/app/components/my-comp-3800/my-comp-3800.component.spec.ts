import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3800Component } from './my-comp-3800.component';

describe('MyComp3800Component', () => {
  let component: MyComp3800Component;
  let fixture: ComponentFixture<MyComp3800Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3800Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3800Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
