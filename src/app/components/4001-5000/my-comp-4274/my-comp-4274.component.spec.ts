import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4274Component } from './my-comp-4274.component';

describe('MyComp4274Component', () => {
  let component: MyComp4274Component;
  let fixture: ComponentFixture<MyComp4274Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4274Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4274Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
