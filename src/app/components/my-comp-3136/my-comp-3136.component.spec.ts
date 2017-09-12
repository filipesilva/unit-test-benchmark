import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3136Component } from './my-comp-3136.component';

describe('MyComp3136Component', () => {
  let component: MyComp3136Component;
  let fixture: ComponentFixture<MyComp3136Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3136Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3136Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
