import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3154Component } from './my-comp-3154.component';

describe('MyComp3154Component', () => {
  let component: MyComp3154Component;
  let fixture: ComponentFixture<MyComp3154Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3154Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3154Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
