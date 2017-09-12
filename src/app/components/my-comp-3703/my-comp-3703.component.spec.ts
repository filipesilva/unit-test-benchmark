import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3703Component } from './my-comp-3703.component';

describe('MyComp3703Component', () => {
  let component: MyComp3703Component;
  let fixture: ComponentFixture<MyComp3703Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3703Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3703Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
